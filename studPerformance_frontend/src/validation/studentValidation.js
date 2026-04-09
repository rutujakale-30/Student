export const validateStudentForm = (form, isEditing = false) => {
  if (!form.name.trim()) return "Name is required";
  if (!form.email.trim()) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) return "Invalid email format";

  if (!form.contact.trim()) return "Contact is required";
  const contactRegex = /^[0-9]{10}$/;
  if (!contactRegex.test(form.contact)) return "Contact must be 10 digits";

  if (!form.cid || form.cid <= 0) return "CID must be positive";

  // Add करताना UID check करा, Update करताना skip करा
  if (!isEditing) {
    if (!form.uid || form.uid <= 0) return "UID must be positive";
  }

  return null;
};
