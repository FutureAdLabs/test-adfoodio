import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.json({msg:'Holaaaa :D'})
})

export default router