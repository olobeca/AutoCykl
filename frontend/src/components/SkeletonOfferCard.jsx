import "../App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonOfferCard() {

  return ( 
    <div className='rounded-md shadow-md hover:shadow-xl flex flex-col gap-4 p-4 bg-white overflow-hidden'>
        <SkeletonTheme baseColor="#e5e7eb" highlightColor="#f3f4f6"></SkeletonTheme>
        <div className="overflow-hidden rounded-md relative">
            <Skeleton height={192} width={"100%"} className="rounded-md" />
        </div>
      <div className='flex flex-col gap-4'>
        <span className='text-lg font-medium text-gray-700'><Skeleton width={140} /></span>
        <span className='text-base font-normal text-orange-600'><Skeleton width={100} /></span>
      </div>
      <div className='flex w-full  justify-between items-center'>
        <span className='text-sm text-gray-500'><Skeleton width={40} /></span>
        <div className='flex gap-4'>
            <span className='text-sm text-gray-500'><Skeleton width={60} /></span>
            <span className='text-sm text-gray-500'><Skeleton width={60} /></span>
        </div>
      </div>
      <span className='text-sm text-gray-500'><Skeleton width={100} /></span>
      <button className="bg-orange-600 hover:bg-orange-800 transition-colors rounded-md text-sm font-medium text-white py-2 px-3">Zobacz Szczegóły</button>
      <SkeletonTheme/>
    </div>

  );
}
export default SkeletonOfferCard;
