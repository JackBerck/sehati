import { Link } from "react-router-dom";

export default function ProgramCard({ title, description, image, link }) {
  return (
    <div className="max-w-sm bg-light-base border border-gray-200 rounded-lg shadow-sm">
      <Link to={link}>
        <img className="rounded-t-md" src={image} alt="" />
      </Link>
      <div className="p-2">
        <Link to={link}>
          <h3 className="card-title-font-size font-bold tracking-tight text-gray-900">
            {title}
          </h3>
        </Link>
        <p className="mb-1 font-normal text-gray-700">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center px-3 py-2 extra-small-font-size font-medium text-center text-light-base bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Lihat detail
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
