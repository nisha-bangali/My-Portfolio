import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({project, index}) => {
    return (
        <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
                <Link to={`/projects/${project.id}`}>
                    <img
                        src={project.img}
                        loading="lazy"
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </Link>
            </div>

            {/* Details */}
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((techStack, i) => (
                        <span
                            key={i}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                        >
                            {techStack}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <Link
                    to={`/projects/${project.id}`}
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition cursor-pointer"
                >
                    View Project
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
