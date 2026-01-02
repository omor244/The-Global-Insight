import React from 'react';

const NewsCardSkeleton = () => {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 animate-pulse flex flex-col h-full">
            {/* Image Skeleton */}
            <div className="h-56 bg-gray-200 w-full"></div>

            {/* Content Skeleton */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex gap-4 mb-4">
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    <div className="h-3 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="space-y-2 mb-6">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
            </div>
        </div>
    );
};

export default NewsCardSkeleton;