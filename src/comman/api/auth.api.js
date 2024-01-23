import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export const signupAPI = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, data.email, data.con_phone)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);

        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('Emsil varifiction send.');
          });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  })

}

export const loginAPI = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, data.email, data.phone)

      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        // if (user.emailVerified) {
        //   resolve({ massege: 'Login Successfully.', user: user })
        // } else {
        //   reject({ massege: 'Emaiil is not verified.' })
        // }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode);
      });
  })

}

export const forgetAPI = (data) => {
  console.log(data);

  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, data.email)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       console.log(errorCode);
      });
  })
}