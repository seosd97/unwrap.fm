import { Card, CardBody, CardHeader, CardTitle } from "@/shared/ui/card";

export default function AccountPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle as="h2">Profile</CardTitle>
      </CardHeader>
      <CardBody>
        <p>Manage your account settings and preferences.</p>
      </CardBody>
    </Card>
  );
}
