import { request } from "./request";
export function loginAPI(formData) {
  return request({
    url: "/user1",
    method: "POST",
    data: formData,
  });
}
