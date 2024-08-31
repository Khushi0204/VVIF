// Certainly! Below is the React component refactored from the provided HTML. The code is divided into smaller components for better readability and maintainability. Shared Tailwind CSS class strings are also factored into constants.

import React from 'react';

// Shared Tailwind CSS class strings
const cardClasses = "max-w-sm w-full bg-card text-card-foreground rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105";
const buttonClasses = "w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/80";
const listItemClasses = "flex items-center";
const checkmarkSrc = "https://openui.fly.dev/openui/24x24.svg?text=✔️";

// PlanCard Component
const PlanCard = ({ title, description, price, features, buttonText }) => (
  <div className={cardClasses}>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-muted-foreground mb-6">{description}</p>
    <p className="text-4xl font-bold mb-4">{price}<span className="text-lg font-medium">/month</span></p>
    <ul className="mb-6 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className={listItemClasses}>
          <img aria-hidden="true" alt="checkmark" src={checkmarkSrc} className="mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={buttonClasses}>{buttonText}</button>
  </div>
);

// Main Component
const PricingPlans = () => {
  const plans = [
    {
      title: "Basic Plan",
      description: "Ideal for individuals starting out.",
      price: "$10",
      features: ["Access to basic features", "Email support"],
      buttonText: "Choose Basic"
    },
    {
      title: "Pro Plan",
      description: "Perfect for professionals and small teams.",
      price: "$30",
      features: ["All Basic Plan features", "Priority email support", "Access to premium features"],
      buttonText: "Choose Pro"
    },
    {
      title: "Enterprise Plan",
      description: "Best for large organizations and enterprises.",
      price: "$100",
      features: ["All Pro Plan features", "Dedicated account manager", "24/7 phone support"],
      buttonText: "Choose Enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

// ### Explanation:
// 1. **Shared Constants**: The repeated Tailwind CSS class strings are stored in constants (`cardClasses`, `buttonClasses`, `listItemClasses`, `checkmarkSrc`).
// 2. **PlanCard Component**: A reusable component for each plan card is created. It takes `title`, `description`, `price`, `features`, and `buttonText` as props.
// 3. **PricingPlans Component**: The main component that renders the header and a list of `PlanCard` components. The plan details are stored in an array of objects and mapped to `PlanCard` components.

// This approach ensures that the code is modular, easy to maintain, and scalable.