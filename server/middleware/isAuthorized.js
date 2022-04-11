/**
 * 
 * @options [{role: rolenya apa, sameUser: boolean}]
 */

module.exports = (options) => {
  return (req, res, next) => {
    const {role, id} = req.user;
    const uid = req.query.userId || req.params.id;
    console.log(uid, id)
    let isAuthorized = false;
    for (const opt of options) {
      if (opt.role === role) isAuthorized = true;
      if (!opt.sameUser) continue;
      if (id != uid) isAuthorized = false;  
      if (isAuthorized) break;
    }
    isAuthorized
      ? next()
      : res.status(401).json({message: 'Unauthorized'})
  }
}