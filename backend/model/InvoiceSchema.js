import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    street:  { type: String, trim: true },
    city:    { type: String, trim: true },
    state:   { type: String, trim: true },
    pincode: { type: String, trim: true },
    country: { type: String, default: "India" },
  },
  { _id: false }
);

const PartySchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, trim: true, lowercase: true },
    phone:   { type: String, trim: true },
    gstin:   { type: String, trim: true, uppercase: true },
    address: { type: AddressSchema },
  },
  { _id: false }
);

const LineItemSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
    quantity:    { type: Number, required: true, min: 1 },
    unit:        { type: String, default: "pcs" },
    unitPrice:   { type: Number, required: true, min: 0 },
    discountPct: { type: Number, default: 0, min: 0, max: 100 },
    taxRate:     { type: Number, default: 0, min: 0, max: 100 },
    amount:      { type: Number },
  },
  { _id: false }
);

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type:     String,
      required: true,
      unique:   true,
      trim:     true,
      default:  () => `INV-${Date.now()}`,
    },
    template: {
      type:    String,
      enum:    ["classic", "modern", "minimal"],
      default: "classic",
    },
    status: {
      type:    String,
      enum:    ["draft", "unpaid", "paid", "pending", "cancelled"],
      default: "draft",
    },
    issueDate: { type: Date, default: Date.now },
    dueDate:   { type: Date },
    from:      { type: PartySchema, required: true },
    to:        { type: PartySchema, required: true },
    items: {
      type:     [LineItemSchema],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message:   "At least one item is required",
      },
    },
    subtotal:    { type: Number, default: 0 },
    discountPct: { type: Number, default: 0, min: 0, max: 100 },
    discountAmt: { type: Number, default: 0 },
    taxPct:      { type: Number, default: 18, min: 0, max: 100 },
    taxAmt:      { type: Number, default: 0 },
    total:       { type: Number, default: 0 },
    notes:       { type: String, trim: true },
    currency:    { type: String, default: "INR" },
    isDeleted:   { type: Boolean, default: false },
  },
  { timestamps: true }
);

InvoiceSchema.pre("save", function (next) {
  this.items.forEach((item) => {
    const gross    = item.quantity * item.unitPrice;
    const itemDisc = gross * (item.discountPct / 100);
    item.amount    = +(gross - itemDisc).toFixed(2);
  });

  this.subtotal    = +this.items.reduce((sum, i) => sum + i.amount, 0).toFixed(2);
  this.discountAmt = +(this.subtotal * (this.discountPct / 100)).toFixed(2);
  const taxable    = this.subtotal - this.discountAmt;
  this.taxAmt      = +(taxable * (this.taxPct / 100)).toFixed(2);
  this.total       = +(taxable + this.taxAmt).toFixed(2);

  next();
});

InvoiceSchema.index({ "to.email": 1 });
InvoiceSchema.index({ status: 1 });
InvoiceSchema.index({ issueDate: -1 });

const Invoice = mongoose.model("Invoice", InvoiceSchema);

export default Invoice;