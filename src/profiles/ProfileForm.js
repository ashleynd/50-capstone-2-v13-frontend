import React, { useState, useContext } from "react";
import Alert from "../common/Alert";
import ProfileLikes from "./ProfileLikes";
import QuotableApi from "../api/api";
import "./ProfileForm.css";
import UserContext from "../auth/UserContext";
import { Container, Row, Col } from "reactstrap";
// import '../RandomQuote/RandomQuote.css';


// eslint-disable-next-line
import useTimedMessage from "../hooks/useTimedMessage";

/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading
 * throughout the site.
 *
 * Confirmation of a successful save is normally a simple <Alert>, but
 * you can opt-in to our fancy limited-time-display message hook,
 * `useTimedMessage`, but switching the lines below.
 *
 * Routed as /profile
 * Routes -> ProfileForm -> Alert
 */

function ProfileForm({ id, title, authorName, likedquotes }) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  // switch to use our fancy limited-time-display message hook
  const [saveConfirmed, setSaveConfirmed] = useState(false);
  // const [saveConfirmed, setSaveConfirmed] = useTimedMessage()

  console.debug(
      "QuoteCard",
      "ProfileForm",
      "currentUser=", currentUser,
      "formData=", formData,
      "formErrors=", formErrors,
      "saveConfirmed=", saveConfirmed,
  );

  /** on form submit:
   * - attempt save to backend & report any errors
   * - if successful
   *   - clear previous error messages and password
   *   - show save-confirmed message
   *   - set current user info throughout the site
   */

  async function handleSubmit(evt) {
    evt.preventDefault();

    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await QuotableApi.saveProfile(username, profileData);
    } catch (errors) {
      debugger;
      setFormErrors(errors);
      return;
    }

    setFormData(f => ({ ...f, password: "" }));
    setFormErrors([]);
    setSaveConfirmed(true);

    // trigger reloading of user information throughout the site
    setCurrentUser(updatedUser);
  }

  /** Handle form data changing */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(f => ({
      ...f,
      [name]: value,
    }));
    setFormErrors([]);
  }

  // React.useEffect(function updateLikedStatus() {
  //   console.debug("QuoteCard useEffect updateLikedStatus", "id=", id);
  //   setisLiked(hasLikedAQuote(id));
  // }, [id, hasLikedAQuote]);

  // /** Like a quote */
  // async function handleLike(evt) {
  //   if (hasLikedAQuote(id)) return;
  //   setisLiked(true);
  //   seeLikedQuote(id);
  //   console.log(seeLikedQuote)
  // }

  return (
      <div className="profile-col-md-6 col-lg-4 offset-md-3 offset-lg-4">
        <Container>
        <Row xs="2">
        <Col>
        <div className="thoughtBubble-profile">
        <h3 className="username-favorite">{formData.firstName || formData.username}'s Favorite Quotes</h3>
        {/* <h3 className="username-favorite">{currentUser.firstName || currentUser.username}'s Favorite Quotes</h3> */}
          <ProfileLikes />
        </div>
        </Col>
        <Col>
        <div className="profile-card">
        <h3 className="profile-title">Profile</h3>
          <div className="profile-card-body">
            <form>
              <div className="profile-form-group">
                <label>Username</label>
                <p className="profile-form-control-plaintext">{formData.username}</p>
              </div>
              <div className="profile-form-group">
                <label>First Name</label>
                <br/>
                <input
                    name="firstName"
                    className="profile-form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                />
              </div>
              <div className="profile-form-group">
                <label>Last Name</label>
                <br/>
                <input
                    name="lastName"
                    className="profile-form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                />
              </div>
              <div className="profile-form-group">
                <label>Email</label>
                <br/>
                <input
                    name="email"
                    className="profile-form-control"
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div className="profile-form-group">
                <label>Confirm password to make changes:</label>
                <input
                    type="password"
                    name="password"
                    className="profile-form-control"
                    value={formData.password}
                    onChange={handleChange}
                />
              </div>

              {formErrors.length
                  ? <Alert type="danger" messages={formErrors} />
                  : null}

              {saveConfirmed
                  ?
                  <Alert type="success" messages={["Updated successfully."]} />
                  : null}

              <button
                  className="profile-btn btn-primary btn-block mt-4"
                  onClick={handleSubmit}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
        </Col>
        </Row>
      </Container>
      </div>
  );
}

export default ProfileForm;
