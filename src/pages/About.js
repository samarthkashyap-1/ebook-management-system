import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div  className="p-4 text-white">
        <h2 className="text-3xl font-bold ">About</h2>
        <p className="text-xl text-clip mt-8">
          This project was created by efforts of Utkarsh Maurya and Samarth
          Kashyap with Uddeshya Amit, Sagar Saini and Tushar Yadav <br /> helping with
          collecting details about the book present on the web app.
        </p>
      </div>
    </div>
  );
};

export default About;
