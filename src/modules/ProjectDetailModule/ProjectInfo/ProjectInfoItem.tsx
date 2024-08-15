interface ProjectInfoItemProps {
  title: string;
  value: string;
}

export const ProjectInfoItem: React.FC<ProjectInfoItemProps> = (props) => {
  return <div className="flex flex-col tracking-wide">
    <span className="text-tosca dark:text-rose font-semibold text-2xl">{props.title}</span>
    <span className="text-black dark:text-white text-xl">{props.value}</span>
  </div>;
};
