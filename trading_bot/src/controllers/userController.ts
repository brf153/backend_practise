import express from "express"

const getUser = (req: express.Request, res: express.Response) => {
    res.send('Hello World');
}

export default getUser;