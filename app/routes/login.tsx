import { Button } from "@chakra-ui/react";
import { Form } from "remix";

type LoginPageProps = {};

export default function LoginPage(props: LoginPageProps) {
  const {} = props;

  return (
    <>
      <Form action="/auth/github" method="post">
        <Button type="submit">Login with GitHub</Button>
      </Form>
    </>
  );
}
