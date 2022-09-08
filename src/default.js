/* ========================================================
 *  DEFAULT DATA
 *  Default values for props
 * ======================================================== */

// Helper methods
const radio = () => ({
  name: "",
  value: "",
  label: "",
  hint: undefined,
  options: []
});

const text = () => ({
  name: "",
  value: "",
  label: "",
  placeholder: "",
  hint: ""
})

// Fields
const customer = {
  nickname: text(),
  email: text(),
  social: text(),
};

const commission = {
  size: radio(),
  polishing: radio(),
  purpose: radio(),
  privacy: radio(),
  briefing: text(),
  references: text(),
  comments: text()
};

export const Default = {
  customer: customer,
  commission: commission
}