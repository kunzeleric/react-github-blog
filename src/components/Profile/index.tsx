import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faBuilding,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const Profile = () => {
  return (
    <div className="h-52 px-8 py-10 bg-base-profile flex items-center rounded-[10px] gap-8">
      <div className="w-32 h-32 flex-1">
        <img src="/src/assets/avatar.png" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-base-title text-2xl font-bold">Cameron Williamson</h1>
          <a href="/" className="text-blue font-bold text-sm flex gap-2 items-center">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="max-w-[612px] text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div className="flex gap-6">
          <span className="flex gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            <p>cameronwll</p>
          </span>
          <span className="flex gap-2 text-base-subtitle ">
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            <p>Rocketseat</p>
          </span>
          <span className="flex gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            <p>32 seguidores</p>
          </span>
        </div>
      </div>
    </div>
  );
};
