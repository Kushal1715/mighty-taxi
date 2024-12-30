import { useEffect, useState } from "react";

type Props = {};

const RiderList = (props: Props) => {
  const [riders, setRiders] = useState([]);

  const fetchRiders = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/riders/get-riders"
      );
      const data = await response.json();
      setRiders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRiders();
  }, []);

  console.log(riders);
  return <div>RiderList</div>;
};

export default RiderList;
