import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faBuilding,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getUserData } from '../../utils/getUserData'

type UserSchemaProps = {
  avatar_url: string,
  followers: number,
  login: string,
  name: string,
  html_url: string,
  bio: string,
}

export const Profile = () => {
  const [profile, setProfile] = useState<UserSchemaProps>();

  const getDataFromUser = async () => {
    const { data } = await getUserData();
    setProfile({
      ...profile,
      avatar_url: data.avatar_url,
      followers: data.followers,
      login: data.login,
      name: data.name,
      html_url: data.html_url,
      bio: data.bio
    })
  }

  const followersText = profile?.followers !== undefined
    ? `${profile?.followers} ${profile?.followers === 1 ? 'seguidor' : 'seguidores'}`
    : 'Seguidores não disponíveis';

  useEffect(() => {
    getDataFromUser();
  }, [])

  return (
    <div className="w-[864px] h-52 px-8 py-10 bg-base-profile flex items-center rounded-[10px] gap-8">
      <img src={profile?.avatar_url} alt="" width="150" height="150" />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h1 className="text-base-title text-2xl font-bold">{profile?.name}</h1>
          <a href={profile?.html_url} target="_blank" className="text-blue font-bold text-sm flex gap-2 items-center">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <p className="max-w-[612px] text-base-text">
          {profile?.bio}
        </p>
        <div className="flex gap-6">
          <span className="flex gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faGithub} className="text-base-label" />
            <p>{profile?.login}</p>
          </span>
          <span className="flex gap-2 text-base-subtitle ">
            <FontAwesomeIcon icon={faBuilding} className="text-base-label" />
            <p>Opus Software</p>
          </span>
          <span className="flex gap-2 text-base-subtitle">
            <FontAwesomeIcon icon={faUserGroup} className="text-base-label" />
            <p>{profile?.followers !== undefined
              ? `${profile?.followers} ${profile?.followers === 1 ? 'seguidor' : 'seguidores'}`
              : 'Seguidores não disponíveis'}</p>
          </span>
        </div>
      </div>
    </div>
  );
};
