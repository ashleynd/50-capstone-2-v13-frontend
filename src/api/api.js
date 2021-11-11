import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class QuotableApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${QuotableApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get authors (filtered by name if not undefined) */

  static async getAuthors(name) {
    let res = await this.request("authors", { name });
    return res.authors;
  }

  /** Get details on a author by handle. */

  static async getAuthor(handle) {
    let res = await this.request(`authors/${handle}`);
    return res.author;
  }

  /** Get list of quotes (filtered by title if not undefined) */

  static async getQuotes(title) {
    let res = await this.request("quotes", { title });
    return res.quotes;
  }

  /** Like a quote */

  static async LikedQuote(username, id) {
    await this.request(`users/${username}/quotes/${id}`, {}, "post");
  }

  /** Return a liked quote */
  // http://localhost:3001/users/testuser200/likedquotes
  // static async seeLikedQuotes(username) {
  //   let res = await this.request(`users/${username}/likedquotes`, {}, "get");
  //   return res.username;
  // }
  static async getLikedQuote(username) {
    // let res = await this.request(`users/${username}/likedquotes`, {}, "get");
    let res = await this.request(`users/${username}/likedquotes`, { username });
    return res.userLikes;
  }

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}


export default QuotableApi;
