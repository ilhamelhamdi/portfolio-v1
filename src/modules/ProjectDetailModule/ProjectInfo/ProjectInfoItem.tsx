interface ProjectInfoItemProps {
  title: string;
  children: React.ReactNode;
}

export const ProjectInfoItem: React.FC<ProjectInfoItemProps> = (props) => {
  return (
    <div className="flex flex-col tracking-wide">
      <span className="text-tosca dark:text-rose font-semibold text-body">
        {props.title}
      </span>
      <span className="text-black dark:text-white text-body">
        {props.children}
      </span>
    </div>
  );
};
