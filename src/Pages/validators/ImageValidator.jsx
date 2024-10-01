export default function FormValidator(e) {
	let { files } = e.target;
	if (files[0].length === 0) return " Pic is Mandatory";
	else if (files[0].length === 1) {
		if (files[0].size > 1048576)
			return "Pic size is more then 1MB. Please uploaad an image upto 1MB";
		else if (files[0].type === "image/jpg" || files[0].type === "image/jpeg" || files[0].type === "image/png" || files[0].type === "image/gip")
			return "";
		else
			return "invalid pic please upload following formates : .jpg,.jpeg,.png,.gip";
	}
}
