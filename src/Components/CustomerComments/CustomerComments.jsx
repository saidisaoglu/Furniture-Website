import CustomerCommentsCarousel from "./CustomerCommentsCarousel";
import CustomerCommentsScss from "./CustomerComments.module.scss";
export default function CustomerComments() {
  return (
    <section className={CustomerCommentsScss.customerCommentsSection}>
      <h2 className={CustomerCommentsScss.CustomerCommentsHeader}>
        Müştəri rəyləri
      </h2>
      <CustomerCommentsCarousel />
    </section>
  );
}
