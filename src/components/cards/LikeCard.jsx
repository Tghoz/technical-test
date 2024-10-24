import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function App({ title, account = "0", icon }) {
  return (
    <Card className="max-w-[400px] bg-[#CFCCC5] ]">
      <CardHeader className="flex items-center gap-3">
        <div className="flex items-center">
          <p className="text-md font-pixel">{title}</p>
          <span className="ml-2">{icon}</span>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-default-500 font-mono text-2xl ">{account}</p>
      </CardBody>
    </Card>
  );
}
