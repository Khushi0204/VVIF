import React from 'react';

const SHARED_CLASSES = {
  container: "min-h-screen flex items-center justify-center bg-background text-foreground",
  card: "max-w-md w-full space-y-8 p-10 bg-card rounded-lg shadow-lg",
  input: "appearance-none rounded-none relative block w-full px-3 py-2 border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm",
  button: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-primary-foreground bg-orange-400 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
  link: "font-medium text-dark hover:text-primary-foreground"
};

const SignIn = () => {
  return (
    <div className={SHARED_CLASSES.container}>
      <div className={SHARED_CLASSES.card}>
        <Header />
        <SignInForm />
      </div>
    </div>
  );
};

const Header = () => (
  <div className="text-center">
    <h2 className="mt-6 text-3xl font-extrabold">Login in to your account</h2>
    
  </div>
);

const SignInForm = () => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <InputField id="email-address" type="email" placeholder="Email address" /><br/>
        <InputField id="password" type="password" placeholder="Password" />
      </div>
      <RememberMe />
      <SubmitButton />
    </form>
  );
};

const InputField = ({ id, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="sr-only">{placeholder}</label>
    <input
      id={id}
      name={id}
      type={type}
      autoComplete={type}
      required
      className={`${SHARED_CLASSES.input} ${id === 'email-address' ? 'rounded-t-md' : 'rounded-b-md'}`}
      placeholder={placeholder}
    />
  </div>
);

const RememberMe = () => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-border rounded" />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">Remember me</label>
    </div>
    <div className="text-sm">
      <a href="#" className={SHARED_CLASSES.link}>Forgot your password?</a>
    </div>
  </div>
);

const SubmitButton = () => (
  <div>
    <button type="submit" className={SHARED_CLASSES.button}>
      
      Sign in
    </button>
  </div>
);

export default SignIn;

