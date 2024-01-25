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
            resolve({ message: 'Emsil varifiction send.' });
          });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
          reject({ message: "Email already used." })
        } else if (errorCode.localeCompare('auth/weak-password') === 0) {
          reject({ message: "min 8 Character." })
        }

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

      if (user.emailVerified) {
        resolve({ message: 'Login Successfully.', user: user });
      } 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode.localeCompare('auth/invalid-credential') === 0) {
        reject({ message: "Emain and password wrong." })
      } else if (errorCode.localeCompare('auth/user-not-found') === 0) {
        console.log(errorCode);
        reject({ message: "First signup." })
      }
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