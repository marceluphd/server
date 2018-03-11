import businesses from '../model/business';

export function sortQuery(req, res, next) {
  const { location, category } = req.query;

  if (location || category) {
    businesses.forEach((business) => {
      if (location === business.location) {
        res.status(200).json(business);
      }
      if (category === business.category) {
        res.status(200).json(business);
      }
    });
    res.status(404).json({
      message: 'Business not found',
      error: true
    });
  }


  next();
}

export function filterToDelete(req, res, next) {
  const businessId = parseInt(req.params.businessId, 10);
  const filteredBusiness = businesses.filter(business => business.id === businessId)[0];

  if (!filteredBusiness) {
    res.status(404).json({
      messsage: 'Business not found',
      error: true
    });
  }

  next();
}


// mocha --compilers js:babel-register && istanbul cover --exit
