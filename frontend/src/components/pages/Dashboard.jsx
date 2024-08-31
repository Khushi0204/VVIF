import { useAuth0 } from "@auth0/auth0-react";

export default function Widget() {
  const { user} = useAuth0();
  return (
    
      <div className="min-h-screen bg-background text-foreground  w-full">
        <div className="w-full mx-auto bg-card shadow-lg rounded-lg overflow-hidden">
          <div className="bg-orange-400 text-primary-foreground p-6">
            <div className="flex items-center">
              
           

              <img className="h-16 w-16 rounded-full mr-4" src="https://placehold.co/64x64" alt="User Profile Picture"></img>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-muted-foreground">johndoe@example.com</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Dashboard</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div className="bg-orange-200 text-secondary-foreground p-4 rounded-lg">
                <h4 className="text-md font-semibold mb-2">Membership</h4>
                <p className="text-muted-foreground mb-4">You currently do not have a membership.</p>
                <a  href="/Membership"><button className="bg-primary text-light text-primary-foreground hover:bg-primary/80 p-2 rounded-lg">Buy Membership</button></a>
              </div>
              
              <div className="bg-orange-200 text-secondary-foreground p-4 rounded-lg">
                <h4 className="text-md font-semibold mb-2">Certificate</h4>
                <p className="text-muted-foreground mb-4">Generate your membership certificate.</p>
                <button className="bg-primary text-light text-primary-foreground hover:bg-primary/80 p-2 rounded-lg">Generate Certificate</button>
              </div>
              
              <div className="bg-orange-200 text-secondary-foreground p-4 rounded-lg">
                <h4 className="text-md font-semibold mb-2">ID Card</h4>
                <p className="text-muted-foreground mb-4">Generate your membership ID card.</p>
                <button className="bg-primary text-light text-primary-foreground hover:bg-primary/80 p-2 rounded-lg">Generate ID Card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}