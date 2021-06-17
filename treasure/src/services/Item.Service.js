import http from "../HttpCommon";
class ItemDataService {
  getAll() {
    return http.get("/Items");
  }
  get(id) {
    return http.get(`/Items/${id}`);
  }
  create(data) {
    return http.post("/Items", data);
  }
  update(id, data) {
    return http.put(`/Items/${id}`, data);
  }
  delete(id) {
    return http.delete(`/Items/${id}`);
  }
  deleteAll() {
    return http.delete(`/Items`);
  }
  findByTitle(title) {
    return http.get(`/Items?title=${title}`);
  }
  addImage(itemId) {
    return http.get(`/AddImages`, itemId);
  }
  postImage(image) {
    return http.post(`images/upload`, image);
  }
}
export default new ItemDataService();
