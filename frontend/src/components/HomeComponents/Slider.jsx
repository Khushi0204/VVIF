export default function Slider() {
  return (
    <div className="h-fit flex items-center justify-center bg-gradient-to-r from-orange-400 to-white-400 to-green-300 mx-2 mt-2">
      <div className="w-full max-w-md p-6 bg-card shadow-lg rounded-lg overflow-hidden">
        <div className="h-80 overflow-y-auto">
          <p className="text-3xl font-bold text-primary-foreground mb-4 text-center">
            Introduction Videos
          </p>
          <ul className="divide-y divide-zinc-300">
            <li className="py-2 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/VyTrZGzpNo0?si=WH783elPtoCl9ek-"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/7DHlPhUGYcI?si=pl2Fuoir8jQy6QIb"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
               
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
              
            <iframe
                src="https://youtube.com/embed/JhF24T0VVH4?si=b7FWbTpA1A70OCg4"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/xDYxAxbCXis?si=iUHg3fsxrL6rhF8X"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/Kzc9pn43xZI?si=COed-LB7Lohjgd0E"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/We97_ge8IrM?si=OJacVFFr_LyvTizH"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
            <li className="py-4 hover:bg-secondary rounded transition duration-200 flex items-start">
            <iframe
                src="https://youtube.com/embed/myLcoOStLNk?si=RboLmzjGPphvJRni"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
