import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";

export default function App({ title, account, text }) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md font-pixel">{title}</p>
          <p className="text-small text-default-500 font-mono">{account}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-xl font-thin">{text}</p>
      </CardBody>
    </Card>
  );
}
