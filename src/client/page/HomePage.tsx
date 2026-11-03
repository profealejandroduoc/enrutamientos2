import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"

export const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <Button size='lg'>Hola soy un botón de Shadcn</Button>
            <Card>
                <CardHeader>
                    <CardTitle>Este es un Card Del Home</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>

    )
}

