module smartbus(
    input clk,
    input reset,
    input book,
    input release_seat,
    input [2:0] seat_id,
    output reg [7:0] seats,
    output reg [3:0] occupied,
    output reg [3:0] available,
    output reg bus_full,
    output reg bus_available
);

    integer i;
    integer count;
    reg [7:0] temp_seats;

    always @(posedge clk) begin
        if (reset) begin
            seats <= 8'b00000000;
            occupied <= 0;
            available <= 8;
            bus_full <= 0;
            bus_available <= 1;
        end
        else begin
            temp_seats = seats;

            if (book && !release_seat)
                temp_seats[seat_id] = 1'b1;
            else if (release_seat && !book)
                temp_seats[seat_id] = 1'b0;

            seats <= temp_seats;

            count = 0;

            for (i = 0; i < 8; i = i + 1) begin
                if (temp_seats[i])
                    count = count + 1;
            end

            occupied <= count;
            available <= 8 - count;
            bus_full <= (count == 8);
            bus_available <= (count < 8);
        end
    end

endmodule
