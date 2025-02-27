import "../Task/Task.css";

const Task = () => {
  document.title = "Mes tâches"; // Définir le titre de la page
  return (
    <main>
      <section className="vh-100">
        <div className="container py-5 mt-5">
          <div className="row d-flex justify-content-center align-items-center h-100 w-100">
            <div className="col">
              <div
                className="card"
                id="list1"
                style={{ borderRadius: "0.75rem", backgroundColor: "#eff1f2" }}
              >
                <div className="card-body py-4 px-4 px-md-5">
                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    Mes Tâches
                  </p>

                  <div className="pb-2">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex flex-row align-items-center">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="exampleFormControlInput1"
                            placeholder="Nouvelle tâche..."
                          />
                          <a
                            href="#!"
                            data-mdb-tooltip-init
                            title="ajouté date échéante"
                          >
                            <i className="fas fa-calendar-alt fa-lg me-3"></i>
                          </a>
                          <div>
                            <button
                              type="button"
                              data-mdb-button-init
                              data-mdb-ripple-init
                              className="btn btn-primary"
                            >
                              Ajouté
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                    <p className="small mb-0 me-2 text-muted">Filtre</p>
                    <select data-mdb-select-init>
                      <option value="1">Tous</option>
                      <option value="2">Completé</option>
                      <option value="3">Active</option>
                      <option value="4">A une date échéante</option>
                    </select>
                    <p className="small mb-0 ms-4 me-2 text-muted">Trier</p>
                    <select data-mdb-select-init>
                      <option value="1">Ajouter date</option>
                      <option value="2">Date échéante</option>
                    </select>
                    <a
                      href="#!"
                      style={{ color: "#23af89" }}
                      data-mdb-tooltip-init
                      title="Ascendance"
                    >
                      <i className="fas fa-sort-amount-down-alt ms-2"></i>
                    </a>
                  </div>

                  {/* Liste des tâches */}
                  <div className="task_list">
                    <ul className="list-group list-group-horizontal rounded-0 bg-transparent">
                      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div className="form-check">
                          <input
                            className="form-check-input me-0"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked1"
                            aria-label="..."
                            defaultChecked
                          />
                        </div>
                      </li>
                      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p className="lead fw-normal mb-0">
                          Acheter des courses pour le week-end
                        </p>
                      </li>
                      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                        <div className="d-flex flex-row justify-content-end mb-1">
                          <a
                            href="#!"
                            className="text-info"
                            data-mdb-tooltip-init
                            title="Éditer Tâche"
                          >
                            <i className="fas fa-pencil-alt me-3"></i>
                          </a>
                          <a
                            href="#!"
                            className="text-danger"
                            data-mdb-tooltip-init
                            title="Supprimer Tâche"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </div>
                        <div className="text-end text-muted">
                          <a
                            href="#!"
                            className="text-muted"
                            data-mdb-tooltip-init
                            title="date de création"
                          >
                            <p className="small mb-0">
                              <i className="fas fa-info-circle me-2"></i>28 Juin
                              2020
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>

                    <ul className="list-group list-group-horizontal rounded-0">
                      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div className="form-check">
                          <input
                            className="form-check-input me-0"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked2"
                            aria-label="..."
                            defaultChecked
                          />
                        </div>
                      </li>
                      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p className="lead fw-normal mb-0">
                          Renouveller assurance voiture
                        </p>
                      </li>
                      <li className="list-group-item px-3 py-1 d-flex align-items-center border-0 bg-transparent">
                        <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-body-tertiary">
                          <p className="small mb-0">
                            <a
                              href="#!"
                              data-mdb-tooltip-init
                              title="Date échéante"
                            >
                              <i className="fas fa-hourglass-half me-2 text-warning"></i>
                            </a>
                            28 Juin 2020
                          </p>
                        </div>
                      </li>
                      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                        <div className="d-flex flex-row justify-content-end mb-1">
                          <a
                            href="#!"
                            className="text-info"
                            data-mdb-tooltip-init
                            title="Éditer Tâche"
                          >
                            <i className="fas fa-pencil-alt me-3"></i>
                          </a>
                          <a
                            href="#!"
                            className="text-danger"
                            data-mdb-tooltip-init
                            title="Supprimer Tâche"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </div>
                        <div className="text-end text-muted">
                          <a
                            href="#!"
                            className="text-muted"
                            data-mdb-tooltip-init
                            title="date de création"
                          >
                            <p className="small mb-0">
                              <i className="fas fa-info-circle me-2"></i>28 Juin
                              2020
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>

                    <ul className="list-group list-group-horizontal rounded-0 mb-2">
                      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                        <div className="form-check">
                          <input
                            className="form-check-input me-0"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked3"
                            aria-label="..."
                            defaultChecked
                          />
                        </div>
                      </li>
                      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p className="lead fw-normal mb-0 bg-body-tertiary w-100 ms-n2 ps-2 py-1 rounded">
                          Confirmer le panier sur carrefour.fr
                        </p>
                      </li>
                      <li className="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                        <div className="d-flex flex-row justify-content-end mb-1">
                          <a
                            href="#!"
                            className="text-info"
                            data-mdb-tooltip-init
                            title="Éditer Tâche"
                          >
                            <i className="fas fa-pencil-alt me-3"></i>
                          </a>
                          <a
                            href="#!"
                            className="text-danger"
                            data-mdb-tooltip-init
                            title="Supprimer Tâche"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </a>
                        </div>
                        <div className="text-end text-muted">
                          <a
                            href="#!"
                            className="text-muted"
                            data-mdb-tooltip-init
                            title="date de création"
                          >
                            <p className="small mb-0">
                              <i className="fas fa-info-circle me-2"></i>28 Juin
                              2020
                            </p>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Task;
