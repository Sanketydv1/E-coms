export default function FormValidator(e) {
  let { name, value } = e.target;
  switch (name) {
    case "name":
      if (!value || value === "") return name + " Field is Mandotry";
      else if (value.length < 3 || value.length > 50)
        return name + " Field value must be withing 3-50";
      else return "";

    default:
      return "";
  }
}
