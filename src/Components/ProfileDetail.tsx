import { ProfilePic } from "../assets/images";

const ProfileDetail = () => {
    return (
        <div className="flex gap-4 p-4">
            <img src={ProfilePic} className="w-[150px]" alt="profile picture" />
            <div>
                <p className="text-4xl font-bold text-red-600">Balamurugan</p>
                <p className="text-xs">BE Computer Science Engineer</p>
                <p className={"mt-3"}>Hello! I am Balamurugan, a front-end developer and passionate React enthusiast from the vibrant city of Madurai, Tamilnadu.</p>
            </div>
        </div>
    );
};

export default ProfileDetail;