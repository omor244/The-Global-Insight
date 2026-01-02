const HeroDetailsSkeleton = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
            {/* Category Badge Skeleton */}
            <div className="h-6 w-20 bg-gray-200 rounded-full mb-6"></div>

            {/* Title Skeleton */}
            <div className="h-10 bg-gray-200 rounded-md w-3/4 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-md w-1/2 mb-8"></div>

            {/* Meta Info Skeleton */}
            <div className="flex gap-4 mb-10 border-y py-4 border-gray-100">
                <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
                <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
            </div>

            {/* Image Skeleton */}
            <div className="w-full h-[400px] bg-gray-200 rounded-2xl mb-10"></div>

            {/* Content Lines */}
            <div className="space-y-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        </div>
    );
};

export default HeroDetailsSkeleton