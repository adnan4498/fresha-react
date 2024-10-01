import React, { useState } from "react";

const AppointmentIncreasing = () => {
  const [numbersInThousand, setNumbersInThousand] = useState(445);
  const [numbersInHundred, setNumbersInHundred] = useState(681);

  setTimeout(() => {
    setNumbersInHundred(numbersInHundred + 13);
  }, 1000);

  if (numbersInHundred > 999) {
    setNumbersInHundred(0);
    setNumbersInThousand(numbersInThousand + 1);
  }

  return (
    <div>
      <div className="flex gap-2 justify-center mt-2">
        <div>
          {/* <p>409,611</p> */}
          <p>
            {numbersInThousand},{numbersInHundred}
          </p>
        </div>
        <div>
          <h3>appointments booked today</h3>
        </div>
      </div>
    </div>
  );
};

export default AppointmentIncreasing;
