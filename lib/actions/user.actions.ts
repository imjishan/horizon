"use server";

export const signIn = async () => {
  try {
    // mutation / database / make fetch request etc...
  } catch (error) {
    console.log("Error:", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    // create a new user in database
    // return user object
  } catch (error) {
    console.log("Error:", error);
  }
};
