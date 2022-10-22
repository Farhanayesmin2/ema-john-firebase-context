/*
1. create firebase project
2. enable web / enable google and email password
3. enable sign in method
4. install firebase
5. get firebase config in your firebase.config.js file 
6. export default app;


....................
Context
....................
1. create UserContext (Auth context): UserContext --> component name, userContext provides AuthContext

2. Create AuthContext
3. set AuthContext.provider
4. Make sure you set the children
5. set the value in the AuthContext.Provider
6. check userContext set or not. {user?.email && <span>{user.email}</span> }
7. Export  AuthContext to use anywhere 
8. get from data
9. getAuth in the userContext



*/