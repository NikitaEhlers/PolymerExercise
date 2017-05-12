using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PolymerTutorialBackEnd.Models;
using System.Web.Http.Cors;

namespace PolymerTutorialBackEnd.Controllers
{
    [EnableCors(origins: "http://localhost:8000", headers: "*", methods: "*")]
    public class CupcakeVotesController : ApiController
    {
        private CupcakeEntities db = new CupcakeEntities();

        // GET: api/CupcakeVotes
        public IQueryable<CupcakeVotes> GetCupcakeVotes()
        {
            return db.CupcakeVotes;
        }

        // GET: api/CupcakeVotes/5
     
        [ResponseType(typeof(CupcakeVotes))]
        public IHttpActionResult GetCupcakeVotes(int id)
        {
            CupcakeVotes cupcakeVotes = db.CupcakeVotes.Find(id);
            if (cupcakeVotes == null)
            {
                return NotFound();
            }

            return Ok(cupcakeVotes);
        }

        // PUT: api/CupcakeVotes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCupcakeVotes(int id, CupcakeVotes cupcakeVotes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cupcakeVotes.VoteID)
            {
                return BadRequest();
            }

            db.Entry(cupcakeVotes).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CupcakeVotesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/CupcakeVotes
        [ResponseType(typeof(CupcakeVotes))]
        public IHttpActionResult PostCupcakeVotes(CupcakeVotes cupcakeVotes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CupcakeVotes.Add(cupcakeVotes);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cupcakeVotes.VoteID }, cupcakeVotes);
        }

        // DELETE: api/CupcakeVotes/5
        [ResponseType(typeof(CupcakeVotes))]
        public IHttpActionResult DeleteCupcakeVotes(int id)
        {
            CupcakeVotes cupcakeVotes = db.CupcakeVotes.Find(id);
            if (cupcakeVotes == null)
            {
                return NotFound();
            }

            db.CupcakeVotes.Remove(cupcakeVotes);
            db.SaveChanges();

            return Ok(cupcakeVotes);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CupcakeVotesExists(int id)
        {
            return db.CupcakeVotes.Count(e => e.VoteID == id) > 0;
        }
    }
}