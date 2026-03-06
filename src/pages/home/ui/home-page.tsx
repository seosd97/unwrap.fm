import { Card, CardBody, CardHeader, CardTitle } from "@/shared/ui/card";

export default function HomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h2">Home</CardTitle>
      </CardHeader>
      <CardBody>
        <p>Welcome to unwrap.fm</p>
      </CardBody>
    </Card>
  );
}
