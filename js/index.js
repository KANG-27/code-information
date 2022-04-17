var app = new (function () {
  this.el = document.getElementById("tasks");
  this.tasks = [];

  this.FetchAll = function () {
    var data = "";

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += "<tr>";
        data += "<td>" + (i + 1) + ". " + this.tasks[i] + "</td>";
        data += '<td><button onclick="app.Edit(' + i + ')">Editar</button></td> ';
        data +=
          '<td><button onclick="app.Delete(' + i + ')">Eliminar</button></td> ';
        data += "</tr>";
      }
    }
    this.Count(this.tasks.length);
    return (this.el.innerHTML = data);
  };

  this.Add = function () {
    el = document.getElementById("add-todo");
    var task = el.value;
    if (task) {
      this.tasks.push(task.trim());
      this.el.value = "";
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    el = document.getElementById("edit-todo");
    el.value = this.tasks[item];
    document.getElementById("edit-box").style.display = "block";
    self = this;

    document.getElementById("save-edit").onsubmit = function () {
      var task = el.value;
      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    };
  };

  this.Delete = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };

  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "Tareas";
    if (data) {
      if (data == 1) {
        name = "Tareas";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = " " + name;
    }
  };
})();
app.FetchAll();

function CloseInput() {
  document.getElementById("edit-box").style.display = "none";
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Dias",
        data: [2, 1, 4, 1, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(25, 20, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(25, 20, 86, 0.2)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Semanas",
        data: [10, 11, 9, 5, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
