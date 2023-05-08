import { clients } from "../../utils/constants";

const Clients = () => {
  return (
    <section class='clients'>
      <h3 class='h3 clients-title'>Clients</h3>

      <ul class='clients-list has-scrollbar'>
        {clients.map((logo, id) => {
          return (
            <li class='clients-item' key={id}>
              <img src={logo} alt={`${logo}-logo`} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Clients;
