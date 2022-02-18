

export const post = async ({ request }) => {
    const body = await request.formData();
    const email = body.get("email");
    const subject = body.get("subject");
    const message = body.get("message");
    const data = { email, subject, message }
  
    return {
        status: 300,
        headers: {
            location: '/'
        }
    };
  };