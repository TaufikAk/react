

export const Admin = () =>{
    return(
        <div class="container">
      <div class="h1 text-center m-5" id="title">Approval Lukisan</div>
      <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button class="nav-link active" id="v-pills-app-tab" data-bs-toggle="pill" data-bs-target="#v-pills-app" type="button" role="tab" aria-controls="v-pills-app" aria-selected="true" onclick="app()">Approval Lukisan</button>
          <button class="nav-link" id="v-pills-user-tab" data-bs-toggle="pill" data-bs-target="#v-pills-user" type="button" role="tab" aria-controls="v-pills-user" aria-selected="false" onclick="user()">List User</button>
          <button class="nav-link" id="v-pills-event-tab" data-bs-toggle="pill" data-bs-target="#v-pills-event" type="button" role="tab" aria-controls="v-pills-event" aria-selected="false" onclick="even()">Event & Pameran</button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div class="tab-pane fade show active" id="v-pills-app" role="tabpanel" aria-labelledby="v-pills-app-tab">
            <table>

            </table>
          </div>
          <div class="tab-pane fade" id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab">...</div>
          <div class="tab-pane fade" id="v-pills-event" role="tabpanel" aria-labelledby="v-pills-event-tab">...</div>
        </div>
      </div>
    </div>
    )
}