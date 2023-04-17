import React from 'react'
import Motions from '../MCAUS/Motions'
import VotingModal from '../MCAUS/VotingModal'
const RollCall = () => {
  return (
    <div>

      <div className="bg-white border-2  border-gray-200 rounded-3xl shadow-md p-6 w-full md:h-auto  lg:h-auto">
        <h2 className="text-lg md:text-2xl text font-medium mb-2">
          Roll Call Result
        </h2>
        <div class="grid  mt-6 md:mt-10 lg:mt-10 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          <button class="bg-red-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-xl lg:text-xl ">
            Absent : 2
          </button>
          <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
            Present : 14
          </button>
          <button class="bg-indigo-400 hover:bg-blue-700 text-white font-bold rounded-xl py-4 text-md sm:text-sm md:text-lg lg:text-xl  ">
            P&V :{" "}
          </button>
        </div>
        <h2 className="mt-6 text-lg md:text-2xl text font-medium ">
         Motions and Voting
        </h2>
        <div class="grid  mt-6 md:mt-10 lg:mt-10 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Motions/>
         <VotingModal/>
          
        </div>
      </div>
    </div>
  )
}

export default RollCall