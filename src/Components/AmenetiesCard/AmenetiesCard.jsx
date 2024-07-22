
const AmenetiesCard = ({heading,description}) => {
  return (
    <div className="grid gap-1">
      <h3 className="text-lg font-bold">{heading}</h3>
      <p className="text-md text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

export default AmenetiesCard