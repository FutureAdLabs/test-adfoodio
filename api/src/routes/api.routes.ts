import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({ msg: 'Holaaaa API :D' })
})

export default router