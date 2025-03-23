import Heading from "../common/Heading";

const timingsData = [
  { day: "Monday", time: "2 PM - 10 PM" },
  { day: "Tuesday", time: "2 PM - 10 PM" },
  { day: "Wednesday", time: "2 PM - 10 PM" },
  { day: "Thursday", time: "2 PM - 10 PM" },
  { day: "Friday", time: "2 PM - 10 PM" },
  { day: "Saturday", time: "2 PM - 10 PM" },
];

function CircuitTimings() {
  return (
    <>
      <Heading
        level={2}
        text="Circuit Opening Hours"
        customHeadingStyle="!text-2xl !font-bold !italic !leading-[36px] !tracking-wider !py-2"
      />
      <p className="text-xs font-medium leading-[18px] tracking-wider">
        Circuit Timings During the Month of May
      </p>
      <div className="sm:flex sm:flex-wrap sm:gap-4 sm:py-4">
        {timingsData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-5 h-12 rounded-lg bg-[#272727] my-4 sm:my-0 sm:w-[48%] lg:p-3"
          >
            <p className="text-sm font-normal tracking-wider text-white">
              {item.day}
            </p>
            <p className="text-sm lg:text-xs lg:whitespace-nowrap font-medium text-[#FE0000] tracking-wide">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CircuitTimings;
