using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Document()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Task()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult EditNews()
        {
            ViewBag.Message = "Your page.";

            return View();
        }
    }
}